function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary) throw 'This is a simple error message.';
  else return candidate.minSalary <= job.maxSalary + (candidate.minSalary / 10);
}
