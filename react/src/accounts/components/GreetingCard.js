import React from 'react';

function GreetingCard(greetings) {
  return (
    <div className="greeting-card">
      <div className="card-header">
        <div className="avatar">
          <img src={greetings.avatar} alt="avatar" />
        </div>
        <div calssName="name">
          {greetings.name}
        </div>
        <div calssName="tag">
          {greetings.name}
        </div>
      </div>
    </div>
  );
}

export default GreetingCard;
