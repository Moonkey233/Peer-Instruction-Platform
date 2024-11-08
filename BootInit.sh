free -m
systemctl start mysql
systemctl start redis-server
cd /root/tomcat/apache-tomcat-7.0.109/bin
bash startup.sh
cd /root/nginx
nginx -c /root/nginx/nginx.conf
cd /root
free -m
