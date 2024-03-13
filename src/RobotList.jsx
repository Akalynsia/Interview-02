import { useState } from "react";

const RobotList = () => {
  // KODUNUZ BURAYA GELİCEK
  const [input, setInput] = useState("");
  const [robotList, setRobotList] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addRobot = () => {
    if (input.trim() === "") {
      alert("Lütfen bir isim girin!");
      return;
    }

    const robotName = input.trim();

    if (robotList.find((robot) => robot.name === robotName)) {
      alert("Robot listede bulunmakta!");
      return;
    }

    const newRobotList = [...robotList, { name: robotName, id: Date.now() }];
    setRobotList(newRobotList);
    setInput("");
  };

  const removeRobot = (id) => {
    const updatedRobotList = robotList.filter((robot) => robot.id !== id);
    setRobotList(updatedRobotList);
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Robot ismi girin"
        value={input}
        onChange={handleInputChange}
        className="input-border"
      />
      <button onClick={addRobot}>Ekle</button>
      <div className="robot-list">
        {robotList.map((robot) => (
          <div key={robot.id} onClick={() => removeRobot(robot.id)}>
            <img src={`https://robohash.org/${robot.name}`} alt={robot.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RobotList;
