docker run --rm -d  -p 80:80 -v ${PWD}/html:/usr/local/openresty/nginx/html -v ${PWD}/templates:/usr/local/openresty/nginx/templates -v ${PWD}/conf/conf.d:/etc/nginx/conf.d -v ${PWD}/conf/nginx.conf:/usr/local/openresty/nginx/conf/nginx.conf  fp/nginx

