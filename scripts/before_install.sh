#echo ..............................uninstallin nodejs...
#echo ..............................remove nodejs...
#sudo apt-get remove nodejs -y
#echo ..............................purge nodejs...
#sudo apt-get purge nodejs -y
#echo ..............................autoremove nodejs...
#sudo apt-get autoremove -y

# echo ..............................INSTALAR PROYECTO ANGULAR...

# echo ..............................update dependencies...
# sudo apt update -y

# echo ..............................installin curl...
# sudo apt-get install -y curl

# NODE JS
# echo ..............................installin Node whit NVM...
# export NVM_DIR=$HOME/.nvm;
# source $NVM_DIR/nvm.sh;
# source ~/.bashrc
# nvm install node -y
# nvm install 16.20.2
# nvm use 16.20.2
# echo ..............................Version nodejs...
# node -v
# echo ..............................Version npm...
# npm -v  

# ANGULAR CLI
# echo ..............................install Angular/Cli...
# sudo npm i @angular/cli@16.2.11


export HOME="/home/ubuntu/"
export NVM_DIR="$HOME/.nvm/"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc

echo ..............................Change directory...
cd /var/www/app/portal

echo ..............................Install dependencies Package...
npm install --loglevel verbose