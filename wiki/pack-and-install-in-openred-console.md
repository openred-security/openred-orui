## Run
yarn build && npm pack

## Install
Move the tgz generate to a root folder. Console will load that file later on.
Remember to change the name to a superior version  than current, for example 2.0.4.

sudo mv opensearch-project-oui-2.0.0.tgz /Users/opensearch-project-oui-2.0.4.tgz


## Change package name
Go to openred-console folder, and do global replace to upgrade version.
Search `opensearch-project-oui-2.0.3.tgz` replace by `opensearch-project-oui-2.0.4.tgz`

## Compile and run
cd openred-console
yarn osd bootstrap --no-validate && cd packages/osd-ui-shared-deps/ && yarn osd:bootstrap && cd ../../
yarn start
