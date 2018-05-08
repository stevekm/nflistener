
all: install

# ~~~~~~~~ #
nfbroadcast:
	git clone https://github.com/qbicsoftware/nextflow.git nfbroadcast && \
	cd nfbroadcast && \
	git checkout nfbroadcast && \
	git checkout 17dd2d54ba8194b774c870c00c5fd054d6bfb53b && \
	make

nfbroadcast/main.nf: nfbroadcast
	cd nfbroadcast && \
	ln -s ../nf-script/main.nf

nfbroadcast/nextflow.config: nfbroadcast
	cd nfbroadcast && \
	ln -s ../nf-script/nextflow.config

install: nfbroadcast nfbroadcast/main.nf nfbroadcast/nextflow.config
	npm install

test:
	cd nfbroadcast && \
	./launch.sh run main.nf

launch:
	@output_file="output.$$(date +%s).json" ; \
	node nflisten.js > "$${output_file}" & \
	pid="$$!" ; \
	echo ">>> process $${pid} outputting to file: $${output_file}" ; \
	( cd nfbroadcast && \
	./launch.sh run main.nf -with-messages http://localhost:5000 ; ) ; \
	echo ">>> killing process $${pid}; output file: $${output_file}" ; \
	kill "$${pid}"

check-mysql:
	@if [ ! "$$(mysql --help > /dev/null 2>&1; echo $$?)" -eq 0 ]; then echo ">>> ERROR: MySql not found"; exit 1; fi

db: check-mysql
	mysql -u"root" -p -e "CREATE DATABASE IF NOT EXISTS nflistener;"
	mysql -u"root" -p -e "GRANT ALL PRIVILEGES ON nflistener.* TO 'nflistener'@'localhost' IDENTIFIED BY 'nflistener';"

clean:
	rm -f output.*.json
