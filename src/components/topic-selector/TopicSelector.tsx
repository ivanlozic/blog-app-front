// TopicSelector.tsx

import React, { useState } from 'react';
import styles from './TopicSelector.module.css';

interface TopicSelectorProps {
  onSelectTopic: (topic: string) => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ onSelectTopic }) => {
  const topics = ['React', 'JavaScript', 'Python', 'Node.js', 'CSS', 'HTML'];

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    onSelectTopic(topic);
  };

  return (
    <div className={styles.container}>
      <header>Choose a Programming Topic:</header>
      <div className={styles.topicList}>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleTopicClick(topic)}
            className={`${styles.topicButton} ${selectedTopic === topic ? styles.selected : ''}`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelector;
