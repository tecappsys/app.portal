echo ..............................Change directory...
cd /var/www/app/portal

echo ..............................Install dependencies Package...
sudo npm install

echo ..............................Build project...
sudo npm run build --prod