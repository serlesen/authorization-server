# Authorization Server with Spring Security

The content of this repository is explained in my Youtube channel.

https://youtube.com/playlist?list=PLab_if3UBk9-AArufc8CryyhSDVqkNT-U

## Run on Localhost

To be able to run the project on localhost, make sure you've followed the next steps.

### Backend alias

The following lines must be added in ```/etc/hosts``` to avoid having the browser create the cookies for the same 
URL overriding values from the different backends.
```
127.0.0.1       backend-auth
127.0.0.1       backend-client
127.0.0.1       backend-resources
```

### Local Database

The backend-auth needs a database where to store the credentials. The following docker command will create it.

```
docker run -d -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=auth_usr -e POSTGRES_PASSWORD=pwd -e POSTGRES_DB=authdb -p 5434:5432 postgres:13
```

## Chapter 1

In this first chapter I explain how the OAuth2 and OpenID connect protocols work. For that, I will create a example
with 3 backends. In the OAuth2 protocol, I need a client (backend-client), a resource server (backend-server) and the 
authorization server (backend-auth).

The backend-client is a registered client in the backend-auth. The user will grant a temporary access to some resources
(from backend-resources) to backend-client. To validate this access, backend-client will delegate to backend-auth the 
authentication of the user. Then backend-client will request resources from backend-resources with the token created by
backend-auth.

The main concept of OAuth2 is that the client will never handle the credentials of the user. This will be delegated
to backend-auth. Backend-auth could be an external entity which handles multiple clients connexions (as Google, 
Facebook, Github...). 

On the top of that, OpenID Connect will send a richer information about the authenticated user from backend-auth to
backend-client. This will reduce the communication between those to validate the identity and to obtain some 
profile information.
