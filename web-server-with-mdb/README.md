# web-server-with-mdb

This template deploys web-server with mdb on k8s;

## Usage:

1.Deploy resources
```shell script
$ kubectl apply -f k8s-configurations/web-server/
$ kubectl apply -f k8s-configurations/mongodb/
```
2.Get into the container
```shell script
$ cubectl get pod
NAME                          READY   STATUS    RESTARTS   AGE
mongodb-86d7cbcc75-l2qzf      1/1     Running   0          5m16s
web-server-746cbf5485-55rs2   1/1     Running   0          5m12s
web-server-746cbf5485-wdpwt   1/1     Running   0          5m12s

$ kubectl  exec -it web-server-746cbf5485-55rs2 -- /bin/bash
```

3.Check web server is working properly.
```shell script
# curl web-server
Hello, This is web-server-746cbf5485-55rs2

# curl web-server
Hello, This is web-server-746cbf5485-wdpwt
```

4. check mongodb connection is working properly.
```shell script
# curl web-server/mongodb/mongodb
Mongodb, collection is,  {"databases":[{"name":"admin","sizeOnDisk":102400,"empty":false},{"name":"config","sizeOnDisk":16384,"empty":false},{"name":"local","sizeOnDisk":73728,"empty":false}],"totalSize":192512,"ok":1}
```
