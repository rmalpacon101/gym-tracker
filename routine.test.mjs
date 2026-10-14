import {test} from 'node:test';
import assert from 'node:assert/strict';
import {routine,createSession,completedSets} from './routine.mjs';
test('routine matches A/B/C set counts and timed plank',()=>{assert.deepEqual(routine.map(r=>r.exercises.reduce((n,e)=>n+e[1],0)),[13,14,16]);assert.equal(routine[0].exercises[4][4],'seconds');assert.equal(routine[2].exercises.length,6)});
test('sessions have independent sets and count completed work only',()=>{const s=createSession(0),other=createSession(0);s.sets[0][0].done=true;s.sets[0][0].reps='10';assert.equal(completedSets(s),1);assert.equal(completedSets(other),0);assert.equal(s.sets[0][1].reps,'');assert.notEqual(s.id,other.id)});
