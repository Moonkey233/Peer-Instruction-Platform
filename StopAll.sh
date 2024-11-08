free -m
cd /root/nginx
nginx -c /root/nginx/nginx.conf -s stop
cd /root/tomcat/apache-tomcat-7.0.109/bin
bash shutdown.sh
systemctl stop redis-server
systemctl stop mysql
cd /root
free -m
