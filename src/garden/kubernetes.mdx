---
title: 'Kubernetes'
lastUpdated: '2020-11-18'
topics: ['engineering', 'devops']
type: 'note'
---

## Intro to Kubernetes

Kubernetes is an open source system that manages containerised apps in a clustered environment. It is designed to manage distributed applications and services across varied infrastructure.

## What is Kubernetes?

> Kubernetes, at its basic level, is a system for running and coordinating containerized applications across a cluster of machines. It is a platform designed to completely manage the life cycle of containerized applications and services using methods that provide predictability, scalability, and high availability.

As a Kubernetes user, you can define how your applications should run and the ways they should be able to interact with other applications or the outside world. You can scale your services up or down, perform graceful rolling updates, and switch traffic between different versions of your applications to test features or rollback problematic deployments. Kubernetes provides interfaces and composable platform primitives that allow you to define and manage your applications with high degrees of flexibility, power, and reliability.

## Kubernetes architecture

> Kubernetes brings together individual physical or virtual machines into a cluster using a shared network to communicate between each server.

The machines in the cluster are given a role in the Kubernetes ecosystem.

**Master**

Acts as a gateway and brain by exposing an api for users and clients, health checking and scheduling.

**Nodes**

The other machines are nodes - responsible for accepting and running workloads. Each node needs to be equipped with a container runtime (like Docker) as Kubernetes runs applications and services in containers.

## Master server components

### etcd

Configuration store.

### kube-apiserver

Implements a RESTful interface. `kubectl` is a CLI that can be used to communicate with it.

### kube-controller-manager

The controller manager is a general service that has many responsibilities.

Primarily, it manages different controllers that regulate the state of the cluster, manage workload life cycles, and perform routine tasks.

For instance, a replication controller ensures that the number of replicas (identical copies) defined for a pod matches the number currently deployed on the cluster. The details of these operations are written to etcd, where the controller manager watches for changes through the API server.

When a change is seen, the controller reads the new information and implements the procedure that fulfills the desired state. This can involve scaling an application up or down, adjusting endpoints, etc.

### kube-scheduler

The scheduler assigns workloads to specific nodes in the cluster.

It reads in a workload's operating requirements, analyses the current infrastructure environment and places the work on the correct nodes.

### cloud-controller-manager

Kubernetes can be deployed to many different environments.

Cloud controller managers act as the glue that allow Kubernetes to interact with different providors.

## Node server components

### Container runtime

Each node must have a container runtime.

The container runtime is responsible for starting and managing containers - apps encapsulated in an isolated but lightweight operating environment.

### kubelet

The main contact point for each node within a cluster. Responsible for relaying information to and from the master node services.

It communicates with the master components to authenticate to the cluster and to receive commands and work. Work is received in the form of a manifest which defines the workload. It controls the container runtime to launch or destroy containers as needed.

### kube-proxy

To manage individual host subnetting and make services available to other components, a small proxy service called kube-proxy is run on each node server. This process forwards requests to the correct containers, can do primitive load balancing, and is generally responsible for making sure the networking environment is predictable and accessible, but isolated where appropriate.
