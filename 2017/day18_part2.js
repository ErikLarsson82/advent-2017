
function dual_duet(str) {
  const instructions = str.trim()
    .split("\n")
    .map( x => x.trim() )
    .map( x => x.split(" ") )
    .map( x => ({
      operation: x[0],
      register: x[1],
      target: x[2],
    }))

  let iterations = 0
  
  const program0 = {
    register: {
      p: 0
    },
    counter: 0,
    value_sent: 0,
    did_rcv: 0,
    queue: [],
    played: null,
    recover: null,
    instructions: instructions
  }

  const program1 = {
    register: {
      p: 1
    },
    counter: 0,
    value_sent: 0,
    did_rcv: 0,
    queue: [],
    played: null,
    recover: null,
    instructions: instructions
  }

  do {
    iterations++
    
    if (is_waiting(program1)) {
      //console.log(`\nRunning 0`)
      excecute(program0, program1)
    } else {
      //console.log(`\nRunning 1`)
      excecute(program1, program0)
    }
    
    if (iterations % 1000000 === 0) {
      //console.log(`\nRunning ${flip ? 'Program 0' : 'Program 1'}`)
      console.log(`Iteration: ${iterations}`)
      console.log(`Program 0 is at ${program0.counter}, status ${program0.instructions[program0.counter].operation}, queue size ${program0.queue.length}, values sent: ${program0.value_sent}`)
      console.log(program0.register)
      console.log(`Program 1 is at ${program1.counter}, status ${program1.instructions[program1.counter].operation}, queue size ${program1.queue.length}, values sent: ${program1.value_sent}`)
      console.log(program1.register)
    }
  } while(!(is_waiting(program0) && is_waiting(program1))) //  && program0.queue.length < 30 // 

  console.log(`Program 1 sent ${program1.value_sent} values`)
  console.log(`Program 0 did rcv ${program0.did_rcv} times`)
}

function is_waiting(program) {
  const ci = program.instructions[program.counter]
  
  return ci.operation === "rcv" && program.queue.length === 0
}

function parts(str) {
    return str.split(" ").map( x => x.trim() )

}

function duet_old(str) {

  let acc = {
    counter: 0,
    register: {},
    played: null,
    recover: null
  }

  while(acc.counter < instructionStrings.length && acc.recover === null) {
    acc = excecute(acc, instructionStrings[acc.counter])
  }

  return acc
}

function excecute(program, partner) {

  const { operation, register, target } = program.instructions[program.counter]

  function registryOrValue(target) {
    return isNaN(parseInt(target)) ? program.register[target] : parseInt(target)
  }
  
  switch(operation) {
    case "snd": 
      program.value_sent++
      partner.queue.push(program.register[register])
      program.counter++
      break;
    case "set": 
      program.register[register] = registryOrValue(target)
      program.counter++
      break;
    case "add":
      program.register[register] = program.register[register] + registryOrValue(target)
      program.counter++
      break;
    case "mul":
      program.register[register] = program.register[register] * registryOrValue(target)
      program.counter++
      break;
    case "mod":
      program.register[register] = program.register[register] % registryOrValue(target)
      program.counter++
      break;
    case "rcv":
      if (program.queue.length === 0)
        return
      const result = program.queue.shift()
      
      program.register[register] = result
      program.counter++
      program.did_rcv++
      break;
    case "jgz":
      if (registryOrValue(register) > 0) {
        program.counter = program.counter + registryOrValue(target)
      } else {
        program.counter++
      }
      break;
  }
}

module.exports = { dual_duet, excecute }