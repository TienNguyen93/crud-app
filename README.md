# Employee Management System

## Table of Contents
1. [Product Spec](#Product-Spec)
2. [API Endpoints](#API-Endpoints)
3. [Assignment 3 Demo](#Assignment-3-Demo)
4. [Wireframes](#Wireframes) 

## Product Spec

### User Stories 
#### As a user I, 
* [x] will land on a visually pleasing homepage by default, which allows navigation to view all tasks and all employees 

* [x] can navigate to all employees view, and 
  * [x] see a list of all employees in the database
  * [x] see an informative message if no employees exist
  * [x] add a new employee
    * [ ] with a validated form displaying real-time error messages

* [x] can navigate to any single employee’s view, and
  * [ ] see details about a single employee, including tasks assigned (if any) 
  * [ ] see an informative message if no tasks belong to that employee
  * [ ] can navigate to single task view (see below)
  * [ ] delete the employee 
  * [ ] edit employee information (including adding/removing tasks)
    * [ ] with a validated form displaying real-time error messages

* [x] can navigate to all tasks view, and
  * [x] see a list of all tasks in the database
  * [ ] see an informative message if no tasks exist
  * [ ] add a new task
    * [ ] with a validated form displaying real-time error messages

* [x] can navigate to any single task’s view, and
  * [x] see details about a single task, including the employee assigned
  * [x] should display “Unassigned” if the task is not assigned to an employee
  * [ ] navigate to single employee view of the employee assigned the task
  * [ ] delete the task 
  * [x] edit the task’s information (including employee assigned)
    * [x] with a validated form displaying real-time error messages 
    
## API Endpoints
 | HTTP Verb | Endpoint | Description |
 | :----------|:----------|:------------ |
 |`GET` |/employees | query all employees |
 |`GET` |/employees/:id | query employee by id |
 |`POST` |/newemployee | add new employee |
 |`GET` |/tasks | query all tasks |
 |`GET` |/tasks/:id | query task by id |
 |`PUT` |/edittask/:id | update task information by id |
     
## Assignment 3 Demo

https://user-images.githubusercontent.com/57969388/207213263-ee498370-1e2c-4d2d-8454-9e9d842a1188.mov

## Wireframes
![Homepage](https://user-images.githubusercontent.com/57969388/205528044-939aa72c-7952-4c1c-a719-f14bedb76b80.png)
![Ems-wireframe](https://user-images.githubusercontent.com/57969388/205528048-6fa6f8e8-5c04-4a60-a95e-5f3e0c805494.png)

## Interactive Prototype

<img src= "https://user-images.githubusercontent.com/57969388/205527118-63abac60-2157-4d2b-834f-52606b7c15ae.gif" width=700>

