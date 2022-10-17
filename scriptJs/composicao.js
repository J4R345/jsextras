
'use strict'

// Composição de funçoes

/*
// Opção 01
const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text => text.split(separator);


// já já disseco essa função!
const compose = (...fns) => value => 
  fns.reduceRight((previousValue, fn) => 
      fn(previousValue), value);

// a função convert é composição de outras três funções
const convert = compose(split(' '), toUpperCase, trim);
const words = convert(' Calopsita do Agreste ');

console.log(words); // 'CALOPSITA', 'DO', 'AGRESTE'

*/

// Opção 02
const trim = text => text.trim();
const toUpperCase = text => text.toUpperCase();
const split = separator => text => text.split(separator);

const words = 

  split(' ')( 
    toUpperCase(
      trim(' Calopsita do Agreste ')
    )
  );

console.log(words); // ['CALOPSITA', 'DO', 'AGRESTE']