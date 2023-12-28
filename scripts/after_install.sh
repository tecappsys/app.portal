export NVM_DI="/home/ubuntu/.nvm"
echo $NVM_DIR
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


echo ..............................Change directory...
cd /var/www/app/portal

echo ..............................Install dependencies Package...
sudo npm install --loglevel verbose

echo ..............................Build project...
sudo npm run build --prod