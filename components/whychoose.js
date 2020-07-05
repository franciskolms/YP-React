import IconBriefImg from '../public/images/common/whychoose/brief.svg'
import IconPlanningImg from '../public/images/common/whychoose/planning.svg'
import IconDesignImg from '../public/images/common/whychoose/design.svg'
import IconCalculationsImg from '../public/images/common/whychoose/calculations.svg'
import IconProductionImg from '../public/images/common/whychoose/production.svg'
import IconInstallationImg from '../public/images/common/whychoose/installation.svg'

const WhyChoose = props => (
  <div className="whychoose">
    <h2>Why Choose Yellow</h2>
    <div className="grid">
      <div className="service">
        <div className="left">
          <img src={IconBriefImg} />
        </div>
        <div className="right">
          <p className="bold">Survey & Brief</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="service">
        <div className="left">
        <img src={IconPlanningImg} />
        </div>
        <div className="right">
          <p className="bold">Planning</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="service">
        <div className="left">
        <img src={IconDesignImg} />
        </div>
        <div className="right">
          <p className="bold">Design</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="service">
        <div className="left">
        <img src={IconCalculationsImg} />
        </div>
        <div className="right">
          <p className="bold">Calculations</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="service">
        <div className="left">
        <img src={IconProductionImg} />
        </div>
        <div className="right">
          <p className="bold">Production</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="service">
        <div className="left">
        <img src={IconInstallationImg} />
        </div>
        <div className="right">
          <p className="bold">Installation</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
      }
      .service {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 1rem;
      }
      .service p {
        font-size:.75rem;
      }
      .service p.bold {
        font-weight:500;
        font-size:1rem;
      }
      .whychoose {
        padding-bottom: 1.5rem;
      }
      `}
    </style>
  </div>
)

export default WhyChoose