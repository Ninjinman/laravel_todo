FROM php:8.0-fpm

COPY --from=composer:2.5.5 /usr/bin/composer /usr/bin/composer

RUN apt-get update && apt-get install -y zip unzip

RUN docker-php-ext-install pdo pdo_mysql