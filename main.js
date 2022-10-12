/**
 *
 * @Genius
 *
 * PROPERTY FLAGS AND DESCRIPTOR.
 *
 * THE PURPOSE FOR THIS IS NOT TO ALLOW A USER TO RE-WRITE OUR NAME PROPERTY.
 */

"use strict";

let user = {
  name: "Genius",
};

Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "Kingsley";
