# dMondragonApp
3. Crear una base de datos llamada `db_mondragon_app`
```bash
docker container run --name db_mondragon_app -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
```
4. Conectarse a la Base de Datos
```bash
docker exec -it db_mondragon_app bash
mysql -u root -p
``` 
### Insertar datos 
``` bash
cat db_script.sql | docker exec -i mymysql /usr/bin/mysql -u root --password=duberly2004 db_mondragon_app
```
