#!/bin/bash
  
  echo "Enter the PASSWORD for database user!"
	echo "Note: password will be hidden when typing"
	read -s rootpasswd

	echo "Creating new MySQL database..."
	mysql -h localhost -uroot -p${rootpasswd} -e "CREATE DATABASE ensolvers_db /*\!40100 DEFAULT CHARACTER SET utf8 */;"
	echo "Database successfully created!"
    
	echo "Creating new user [ensolvers_user] with password ''"
	mysql -h localhost -uroot -p${rootpasswd} -e "CREATE USER ensolvers_user@localhost IDENTIFIED BY '';"
	echo "User successfully created!"
	
	echo "Granting ALL privileges on ensolvers_db to ensolvers_user!"
	mysql -h localhost -uroot -p${rootpasswd} -e "GRANT ALL PRIVILEGES ON ensolvers_db.* TO 'ensolvers_user'@'localhost';"
	mysql -h localhost -uroot -p${rootpasswd} -e "FLUSH PRIVILEGES;"

  echo "Configuration to backend"
  cd ./backend/
  echo "Backend node modules installation"
  npm install
  
  npm run start
  
	exit

