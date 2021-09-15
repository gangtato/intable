FROM ubuntu

RUN apt-get update

RUN apt-get install nginx -y

COPY index.html /var/www/html/
COPY intable.js /var/www/html/
COPY module/searchDatatable.js /var/www/html/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]