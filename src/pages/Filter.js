import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.fRAMEContainer}>
        <nav className={styles.frameParent}>
          <div className={styles.wrapperGroup18316Parent}>
            <div className={styles.wrapperGroup18316}>
              <img
                className={styles.wrapperGroup18316Child}
                loading="eager"
                alt=""
                src="/group-18316.svg"
              />
            </div>
            <div className={styles.sports}>Sports</div>
          </div>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="eager"
              alt=""
              src="/group-18314.svg"
            />
            <div className={styles.music}>Music</div>
          </div>
          <div className={styles.wrapperGroup18315Parent}>
            <div className={styles.wrapperGroup18315}>
              <img
                className={styles.wrapperGroup18315Child}
                loading="eager"
                alt=""
                src="/group-18315.svg"
              />
            </div>
            <div className={styles.art}>Art</div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameItem}
              loading="eager"
              alt=""
              src="/group-18317.svg"
            />
            <div className={styles.food}>Food</div>
          </div>
          <div className={styles.groupDiv}>
            <img
              className={styles.frameInner}
              loading="eager"
              alt=""
              src="/group-18317-1.svg"
            />
            <div className={styles.food1}>Food</div>
          </div>
        </nav>
      </div>
      <div className={styles.filterChild} />
      <main className={styles.fRAMEBackground}>
        <section className={styles.bg} />
        <form className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.sportsMusicArtFood} />
          <div className={styles.selectPriceRange}>Select price range</div>
          <div className={styles.eth0110}>ETH 0,1-10</div>
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src="/group-18303.svg"
          />
          <button className={styles.rectangleGroup}>
            <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
            <div className={styles.continue}>Apply</div>
          </button>
          <button className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.continue1}>Reset</div>
          </button>
          <h3 className={styles.filter1}>Filter</h3>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild1} />
            <img className={styles.vectorIcon} alt="" src="/vector-6.svg" />
            <input
              className={styles.milanItaly}
              placeholder="Milan, Italy"
              type="text"
            />
            <img className={styles.frameChild2} alt="" src="/group-18207.svg" />
          </div>
          <div className={styles.location}>Location</div>
          <div className={styles.timeDate}>{`Time & Date`}</div>
          <button className={styles.groupButton}>
            <div className={styles.frameChild3} />
            <div className={styles.today}>Today</div>
          </button>
          <button className={styles.rectangleParent2}>
            <div className={styles.frameChild4} />
            <div className={styles.tomorrow}>Tomorrow</div>
          </button>
          <button className={styles.rectangleParent3}>
            <div className={styles.frameChild5} />
            <div className={styles.thisWeek}>This week</div>
          </button>
          <div className={styles.rectangleParent4}>
            <div className={styles.frameChild6} />
            <div className={styles.chooseFromCalendar}>
              Choose from calendar
            </div>
            <img
              className={styles.calendarIcon}
              alt=""
              src="/calendar@2x.png"
            />
            <img className={styles.frameChild7} alt="" src="/vector-9.svg" />
          </div>
        </form>
      </main>
      <footer className={styles.filterInner}>
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild8} />
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="/rectangle1@2x.png"
          />
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.june900PmParent}>
                <div className={styles.june900}>10 June • 9:00 PM</div>
                <img className={styles.frameChild9} alt="" />
              </div>
              <b className={styles.imGoingTo}>
                International Gala Music Festival
              </b>
            </div>
            <div className={styles.frameParent2}>
              <img className={styles.frameChild10} alt="" />
              <div className={styles.min}>{`36 Guild Street London, UK  `}</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Filter;
