#!/bin/bash
echo "Inicio exportacion de contenido"
if [ -f .env ]; then
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
    echo $SPACE_ID
    contentful space export --space-id $SPACE_ID --environment-id $SPACE_ENV --management-Token $CMA_TOKEN --exportDir $EXPORT_PATH --download-assets
fi