#!/bin/bash

# unset GREP_OPTIONS
# Configures environment for LaserChron lab

# export SPARROW_ENV="production"
export SPARROW_ENV="development"
export SPARROW_SECRET_KEY="TemporaryKey"

# # SPARROW_CONFIG_DIR always points to the sourced configuration
PROJECT_DIR="$SPARROW_CONFIG_DIR"

# # SPARROW_VERSION makes sure we are using a compatible
# # version of the sparrow core application
# # (note, we can use SPARROW_PATH instead to tie to a specific
# #  installation if we are using a submodule, for instance.)
# export SPARROW_VERSION="==2.0.0.*"

# export SPARROW_BACKUP_DIR="$PROJECT_DIR/database-backups"
export SPARROW_LAB_NAME="Concord University EMPA"
# export COMPOSE_PROJECT_NAME="laserchron"
# # Need to figure out a better way to do this, but it'll be finicky
# # because of docker container nonsense
# export SPARROW_INIT_SQL="$PROJECT_DIR/sql"
# export SPARROW_SITE_CONTENT="$PROJECT_DIR/site-content"
export SPARROW_HTTP_PORT=5002

export SPARROW_PLUGIN_DIR="$PROJECT_DIR/plugins/backend-plugins"

# # This only works in production
# export SPARROW_DOMAIN="microanalysis.concord.edu"

# # S3 stuff
# export SPARROW_S3_ENDPOINT="https://sfo2.digitaloceanspaces.com"
# export SPARROW_S3_BUCKET="laserchron-data"

# override="$PROJECT_DIR/sparrow-config.overrides.sh"
# [ -f "$override" ] && source "$override"
