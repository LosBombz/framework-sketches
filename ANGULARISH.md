___                    _                 _____    _     
/ _ \                  | |               |_   _|  | |    
/ /_\ \_ __   __ _ _   _| | __ _ _ __ ______| | ___| |__  
|  _  | '_ \ / _` | | | | |/ _` | '__|______| |/ __| '_ \
| | | | | | | (_| | |_| | | (_| | |        _| |\__ \ | | |
\_| |_/_| |_|\__, |\__,_|_|\__,_|_|        \___/___/_| |_|
            __/ |                                       
           |___/                                        

Take some concepts from the angular.js framework and make an implementation that
feels much like that API.

## Concepts

### Actors
1. Directives / components
    * local state
    * (maybe dumb and container style)
    * built in directives could be useful ex: ng-repeat, ng-click, ng-if - though
    this could also be mitigated using control flow packaged with something like
    handlebars or some other templating language with some functionality sprinkled
    in for user events like click, mouseenter, scroll, etc.
2. Services
    * built in services could be useful ex: $window
3. Router
4. Dependency Injection
    * can maybe do ok with just es6 modules
5. Templates
6. Controllers
    * group state
    * action delegation
    * data handling
7. Filters
    * always thought these were a cool way to handle data formatting input in
    transformed output out. can probably just use pure functions and register them?

8. application lifecycle
9. Providers are used to provide services to components. This can get a little vague as
Services or component classes could just include an api for such behavior. maybe something like:
```
MyComponent.use(Moment);
```

or just in Component composition

```
class MyComponent extends Framework.component('MyComponent', [Moment]) {
    super();

    init function(props, deps) {
        this.{SomeMethod} = moment;
    }
}
```

10. Modules: angular modules encapsulate all the entities that comprise a module. A module can have 1 to many
of the previously listed components. Modules are interesting for keeping groups of entities organized and
accessible to each other. angular lets you define modules like so:

```
angular.module('myModule', ["dependency-1", "dependency-2"])
```

and then allows you to get modules like so

```
angular.module('myModule')
```

the difference in getter/setter styles is the passing or omitting of an array of dependencies

### Deviations
* Immutable state is the hotness, I think it's worth pursuing
* services in angular 1.x were a mess, simplify this idea. Services could work
as vehicles for a flux style data flow pattern
* scopes are a weird thing and can be confusing, although a simplification of this concept
could be an interesting way of handling component privilege
