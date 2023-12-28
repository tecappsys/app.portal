source /home/ec2-user/.bash_profile

echo ..............................Change directory...
cd /var/www/app/portal

echo ..............................Install dependencies Package...
sudo npm install --loglevel verbose

echo ..............................Build project...
sudo npm run build --prod