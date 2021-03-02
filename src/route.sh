#!/bin/bash

if [ $# -lt 2 ]; then
    echo ${0} OldRoute NewRoute
    echo "to delete"
    echo ${0} delete OldRoute
    exit 0
fi


export fromnamelo=$1;
export fromnameup="$(tr '[:lower:]' '[:upper:]' <<< ${fromnamelo:0:1})${fromnamelo:1}";

export namelo=$2;
export nameup="$(tr '[:lower:]' '[:upper:]' <<< ${namelo:0:1})${namelo:1}";

echo $1 $2

if [ $1 == "delete" ]; then
  # Remove files
  rm -f src/api/${namelo}Api.js
  rm -r src/components/${namelo}
  rm -f src/router/${namelo}.js
  exit 0
fi

cp src/api/${fromnamelo}Api.js src/api/${namelo}Api.js
sed -i -e "s/${fromnamelo}/${namelo}/g" src/api/${namelo}Api.js
sed -i -e "s/${fromnameup}/${nameup}/g" src/api/${namelo}Api.js
# sed -i '' does not work with other linux distributions
# MacOs by default creates a file with -e as backup
rm -f src/api/${namelo}Api.js-e
echo "Created api...."

cp -R src/components/${fromnamelo} src/components/${namelo}

sed -i -e "s/${fromnamelo}/${namelo}/g" src/components/${namelo}/List.vue
sed -i -e "s/${fromnameup}/${nameup}/g" src/components/${namelo}/List.vue
sed -i -e "s/${fromnamelo}/${namelo}/g" src/components/${namelo}/Manage.vue
sed -i -e "s/${fromnameup}/${nameup}/g" src/components/${namelo}/Manage.vue
sed -i -e "s/${fromnamelo}/${namelo}/g" src/components/${namelo}/Login.vue
sed -i -e "s/${fromnameup}/${nameup}/g" src/components/${namelo}/Login.vue

rm -rf src/components/${namelo}/List.vue-e
rm -rf src/components/${namelo}/Manage.vue-e
rm -rf src/components/${namelo}/Login.vue-e

echo "Created components...."

cp src/router/${fromnamelo}.js src/router/${namelo}.js
sed -i -e "s/${fromnamelo}/${namelo}/g" src/router/${namelo}.js
sed -i -e "s/${fromnameup}/${nameup}/g" src/router/${namelo}.js
rm -f src/router/${namelo}.js-e
echo "Created router...."

# cp test/${fromnamelo}.js test/${namelo}.js
# sed -i -e "s/${fromnamelo}/${namelo}/g" test/${namelo}.js
# rm -f test/${namelo}.js-e
# echo "Created test case...."


# # Adding route
# echo "objApp.use('/projectname/${namelo}', require('./controllers/${namelo}Ctlr.js'));" >> router.js
# echo "Route added...."
