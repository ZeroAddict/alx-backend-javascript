export default function taskBlock(trueOrFalse) {
  /* eslint-disable no-unused-vars */
  const task = false;
   const task2 = true;

   if (trueOrFalse) {
     const task = true;
     const task2 = false;
   }
 /*ENABLE eslint-enable no-unused-vars*/
   return [task, task2];
 }
