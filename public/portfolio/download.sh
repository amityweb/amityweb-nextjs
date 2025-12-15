#!/bin/bash
cd /Users/laurence/Documents/Development/amityweb/public/portfolio
mkdir -p hero screen

# Hero images
declare -A HERO_URLS
HERO_URLS["blagrave.png"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758175"
HERO_URLS["capselhomes.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758177"
HERO_URLS["captiva-spa.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758179"
HERO_URLS["carerfriendly.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758181"
HERO_URLS["cavamh.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758183"
HERO_URLS["crackerjackpot.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758185"
HERO_URLS["green-finance.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758187"
HERO_URLS["heatsense.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758189"
HERO_URLS["monmouthshirehousing.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758191"
HERO_URLS["proctercaststone.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758193"
HERO_URLS["sensearth.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758195"
HERO_URLS["supercomputing.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758197"
HERO_URLS["swperbox.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758199"
HERO_URLS["v21.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758201"
HERO_URLS["valleysregionalpark.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758203"
HERO_URLS["workshed.png"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758205"
HERO_URLS["wwha.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758207"
HERO_URLS["youthfuturefoundation.jpg"]="https://app.asana.com/app/asana/-/get_asset?asset_id=1212450304758209"

echo "Downloading complete"
