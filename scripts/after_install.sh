export HOME="/home/ubuntu/"
export NVM_DIR="$HOME/.nvm/versions/node/v16.20.2/bin"
[ -s "$NVM_DIR/npm.sh" ] && \. "$NVM_DIR/npm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc

echo ..............................Change directory...
cd /var/www/app/portal

echo ..............................Install dependencies Package...
npm install --loglevel verbose

echo ..............................Build project...
npm run build --prod