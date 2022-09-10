all: build

build:
	npm run build

run:
	npm run dev

deploy: build
	ansible-playbook --inventory ansible/hosts --limit=dev --user=cadizm ansible/deploy.yml
