import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
  <div id="project">
    <section className="content">
      <div className="block-content">
        <div className="project-title">
          <h2>Rapid Prototyping and Physical Computing</h2>
          <p className="tags">Class project</p>
        </div>
        <p className="project-description">
          Learned modern rapid prototyping techniques such as laser cutting, 3D
          printing and microcontroller programming (such as the Arduino system){" "}
        </p>
        <div className="project-info">
          <p>
            <b>My role:</b> Programmer
          </p>
          <p>
            <b>Skills utilized:</b> microcontrollers (Photon), CAD program
            (AutoDesk Inventor), building prototypes with a laser cutter, and 3D
            printer
          </p>
        </div>
        <div className="project-wrapper">
          <h4>Design 1: Interactive Design</h4>
          <p>
            The small moving car is a design for a fun game. In the game,
            players can set a target distance by the potentiometer. The player
            then can use the button to control the mini car to the target
            distance. There are two different ways to use the button. One is the
            quick and short click, and the other is the longer click. The quick
            and short click can switch the mini car run or stop. The longer
            click can switch the direction of the car (moving forward or moving
            backward). When the mini car is far away from the target distance,
            the 3-color LED light will turn green. When the car is at the target
            place, the blue light will be on. But if the the car is too close to
            the target object, the red light will be on.
          </p>
          <h4>Interactive Design: Demo</h4>
          <iframe
            src="https://player.vimeo.com/video/158824710"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <hr />
        <div className="project-wrapper">
          <h4 className="text-muted">Design 2: Interactive Design</h4>
          <p className="textleft">
            My second design project is a box made by a 2D laser cutter. The box
            can be triggered to open by the correct input code. The default code
            is “longer click, shorter click, and longer click”. It also has a
            speaker to tell you if your input code is correct or not. When the
            system start to work, the speaker will play music. Then you can
            start to input the opening code. If you click in wrong actions, a
            speaker will play error sound. If you click code corectly, the
            speaker will play music and the box will open. After seconds, the
            box will close automatically. The status of the input code can also
            be seen in console if you connect it.{" "}
          </p>
          <h4>2D printer Design: Demo</h4>
          <iframe
            src="https://player.vimeo.com/video/162384768"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <hr />
        <div className="project-wrapper">
          <h4 className="text-muted">Design 3: Puzzle 3D</h4>
          <p className="textleft">
            In the third design assignment, I made a 3D puzzle Phillipe Dubois'
            Burr. This puzzle has six different parts that can be assembled
            together. The design idea comes from a{" "}
            <a href="https://www.youtube.com/watch?v=ztJwq9WcU6w ">
              {" "}
              Youtube video
            </a>
          </p>
          <p className="textleft">
            In this design, I used Inventory to draw 2d sketch and 3d object
            that could be printed in the 3D printer
          </p>
          <StaticImage
            className="img-responsive img-center"
            src="../../images/projects/3d-min.jpg"
            alt="3D design"
          />
          <h4>3D printer Design: Demo</h4>
          <iframe
            src="https://player.vimeo.com/video/165007865"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <hr />
        <div className="project-wrapper">
          <h4 className="text-muted">Final Project: Kinetic Art (Group Work</h4>
          <p className="textleft">
            Kinetic art is a kind of art form that passing feelings to viewers
            based on the movement contained. We are going to build a sculpture
            with kinetic particles in the project. The original idea similar to
            the kinetic rain in Singapore airport.
          </p>
          <p className="textleft">
            Our final design had 3 rows hanging particles that could move to
            several different patterns which have been programmed well. These
            patterns could follow the sine wave, cosine wave and other shapes.
            We used stepping motor to control the position of particles. We also
            had 9 3-color LED lights that could change color. These LED lights
            could help the acrylic made particles look beautiful.
          </p>
          <h4>Presentation Poster</h4>
          <StaticImage
            className="img-responsive img-center"
            src="../../images/projects/rapid-poster-min.jpg"
            alt="3D design"
          />
          <h4>Kinetic Art: Demo</h4>
          <iframe
            src="https://player.vimeo.com/video/166822844"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <hr />
      </div>
    </section>
  </div>
)
