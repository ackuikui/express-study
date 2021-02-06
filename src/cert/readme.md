https://heara.in/nodejs-localhost-https/


# step1: 生成CA私钥
openssl genrsa -out ca.key 4096

# step2: 生成证书签名请求
openssl req -new -key ca.key -out ca.csr

# step3: 证书签名，生成根证书
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt



# step1: 生成服务器的私钥
openssl genrsa -out server.key 4096

# step2: 生成证书签名请求
openssl req -new -out server.csr -key server.key -config <( cat server.csr.conf )

# step3: CA对csr签名
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt  -sha256 -days 365 -extfile v3.ext 