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
127.0.0.1       backend-gateway-client
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


## Chapter 2

In this second chapter I use an application built on top of Spring Cloud Gateway as the Client Server. This application
will try to use the Resources Server using the OAuth2 protocol.

Most of the time, the Resource Server and Authorization Server are existing applications which are consumed by hundreds
and thousands of clients. The goal is the consume them from a custom application. I've chosen Spring Cloud Gateway as
this is a common entry point in a microservice architecture.

## Chapter 3

In this third chapter I use Keycloak as the authorization server. Keycloak will list all the clients and users. All
the authentication will be managed by Keycloak. I can easily add and configure clients, with their callback URLs, WebOrigins
and authorization protocols.

I can also add final users, manage their profile and password.

In this chapter I will connect my Spring Cloud Gateway as a client server to Keycloak. Then, connecter my resources server
to validate the JWT against Keycloak.

