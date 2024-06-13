#!/usr/bin/node
/* eslint-disable */
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const classrooms = [];
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  classrooms.push(room1, room2, room3);
  return classrooms;
}
