# web-server-with-rdb

This template deploys web-server with rdb on k8s;

## Usage:

1.Deploy resources
```shell script
$ kubectl apply -f k8s-configurations/web-server/
```
2.Get into the container
```shell script
$ kubectl get service 
   NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
   kubernetes   ClusterIP   10.100.0.1     <none>        443/TCP   3d1h
   web-server   ClusterIP   10.100.98.77   <none>        80/TCP    101s 

$ kubectl exec -it web-server-746cbf5485-m794b -- /bin/bash
```

3.Check web server is working properly
```shell script
# curl web-server
Hello, I am web-server-746cbf5485-vbr45

# curl web-server
Hello, I am web-server-746cbf5485-m794b
```
