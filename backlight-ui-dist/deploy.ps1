# Deploy `backlight-ui-dist` to npm.

# Get UI version
$UI_VERSION=$(node -p "require('../package.json').version")
echo $UI_VERSION

# Replace version placeholder with UI's version
(Get-Content ./package.json -Raw) -replace '__VERSION__', $UI_VERSION | Set-Content -Path .\package.json

# Copy UI's dist files to our directory
cp ../dist/* .

# Publish package
#npm publish .