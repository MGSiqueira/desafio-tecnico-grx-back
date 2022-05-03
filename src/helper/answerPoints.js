const answerPoints = (obj) => {
  const qnty = { QuantidadePositiva: 0,
    QuantidadeNegativa: 0,
    QuantidadeNaoAvaliada: 0,
  }

  const answers = Object.values(obj);

  answers.forEach((answer) => {
    switch (answer) {
      case 'Sim': return qnty.QuantidadePositiva += 1;
      case 'Não': return qnty.QuantidadeNegativa += 1;
      case 'Agora!!': return qnty.QuantidadePositiva += 2;
      case 'Não sei': return qnty.QuantidadeNaoAvaliada += 1;
    }
  });
  
  return { ...obj, ...qnty };
};

module.exports = {
  answerPoints,
};
