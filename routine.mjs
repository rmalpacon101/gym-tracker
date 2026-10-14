export const routine = [
 {name:'A-Day',focus:'Squat & Push',exercises:[
 ['Goblet Squats / DB Squats',3,'8–10 reps','Hold a heavy dumbbell against your chest. Keep chest up and squat deep.'],
 ['Flat Dumbbell Bench Press',3,'8–10 reps','Press smoothly over your chest with a controlled descent.'],
 ['Lat Pulldown / Single-Arm Row',3,'8–10 reps','Pull elbows down and back, squeezing your back muscles.'],
 ['DB Overhead Shoulder Press',2,'10–12 reps','Seated or standing, press dumbbells overhead.'],
 ['Plank',2,'30–45 seconds','Hold a tight core position.','seconds']]},
 {name:'B-Day',focus:'Hinge & Pull',exercises:[
 ['Romanian Deadlifts (DBs)',3,'10–12 reps','Keep knees slightly bent; push hips back, then squeeze glutes to stand.'],
 ['Seated Cable Rows / Band Rows',3,'10–12 reps','Keep torso stable and pull toward your lower ribs.'],
 ['DB Walking Lunges / Split Squats',3,'8–10 reps per leg','Keep torso upright. Record reps per leg.'],
 ['Push-Ups',3,'2–3 sets · near-failure','Keep core tight and lower chest close to the ground. The third set is optional.'],
 ['Crunches / Hanging Knee Raises',2,'12–15 reps','Use a controlled contraction focusing on your abdominals.']]},
 {name:'C-Day',focus:'Full-Body Mix',exercises:[
 ['DB Step-Ups / Goblet Squats',3,'10 reps per leg (step-ups)','Use a sturdy bench or box. Drive through your heel. For goblet squats, record total reps.'],
 ['Incline Dumbbell Bench Press',3,'8–10 reps','Set bench to 30–45 degrees and lower with control.'],
 ['Lat Pulldown / Cable Pulldowns',3,'10–12 reps','Use full range of motion and pull down smoothly.'],
 ['DB Lateral Raises',3,'12–15 reps','Use light weights and strict form. Raise dumbbells to the sides.'],
 ['Bicep Curls',2,'12 reps','Superset with tricep extensions with minimal rest.'],
 ['Tricep Extensions',2,'12 reps','Superset with bicep curls with minimal rest.']]}];
export function completedSets(session) { return session.sets.flat().filter(s => s.done).length; }
export function createSession(day, date = new Date().toISOString()) {
 return {id:globalThis.crypto.randomUUID(),day,date,unit:'kg',notes:'',sets:routine[day].exercises.map(e=>Array.from({length:e[1]},()=>({weight:'',reps:'',done:false})))};
}
