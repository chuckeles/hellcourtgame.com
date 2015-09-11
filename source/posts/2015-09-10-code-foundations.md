---
title: Code Foundations
link: code-foundations
---

When I was programming Hell Court for Ludum Dare, I didn't start with any code. That's probably why the resulting code ended up being a horrible mess. That and the 72 hours limit. So before I'll continue working on the game, I decided to write some **foundations**. Here's what I ended with.

### Script Base Class

I made a class that all my scripts will inherit from instead of the Unity's `MonoBehaviour` class. It will contain pointers to frequently used objects. This will prevent code duplications.

### Object Pool

![Object Pool Code](/images/object-pool-code.png)

I added a generic `GameObject pool` class. It can manage any `GameObject` and it creates a separate `GameObject` for every pool. Neat.

### Data Center and Event Center

There are two classes that act as a center for all the code. The data center will have all the "global" evil variables for easy access and decoupling. The event center will be a place for dispatching and listening to events, again for decoupling.

### Auto Game Object

Finally, I wrote little utility classes that allow me to describe a variable of type `GameObject`. This makes Unity automatically assign correspoding `GameObject` either from the scene or from assets. There's also a button to trigger this manually. I like this system and we'll see how useful it will prove to be. It is easy to use, quick to write and most importantly, automatic.

Here's how it looks:

![Auto Game Object Code](/images/auto-game-object.png)

```csharp
[AutoGameObject.FromSceneByName("Camera")]
public AutoGameObject MainCamera;
```
