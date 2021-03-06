# Deploy `backlight-ui-dist` to npm.

# Get UI version
UI_VERSION=$(node -p "require('../package.json').version")

echo $UI_VERSION
# Replace our version placeholder with UI's version
sed -i "s|\$\$VERSION|$UI_VERSION|g" package.json

# Copy UI's dist files to our directory
cp ../dist/* .

npm publish .

