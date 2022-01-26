import React  from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import { sum } from '../../components/Global/Global';
import { Link } from 'react-router-dom';

function ChartViewer (props) {
        const suma = sum(props.channels?.map(x => x.clients_amount))
        const chartValues= props.channels?.map(x => (x.clients_amount * 100 /suma).toFixed(2)) 
        const data = {
                datasets: [{
                        data:  chartValues,
                        backgroundColor: props.channels?.map(x => x.channel_color),
                    }],
                labels: props.channels?.map(x => x.channel_name),
        }

        const options = {
                legend: {  display: false },
                plugins: {
                        datalabels: {
                                formatter: (value) => { return value + '%';   },
                          display: true,
                          align: 'bottom',
                          backgroundColor: '#f3f3f3',
                          borderRadius: 5,
                          font: {  size: 14  }
                        },
                },
         }
        return (
                <section  className="chart-viewer chart-viewer_theme">
                        <div className="chart-viewer__block g-container">
                                <header className="chart-viewer__header">
                                        <h1 className="chart-viewer__header--title">Charter </h1>

                                        <p className="chart-viewer__header--desc">Aplikacja umożliwiająca CRUD kanałów pozyskania klienta.</p>
                                 </header>

                                 <div className="chart-viewer__inner">
                                        { props.channels.length != 0 ?
                                        <Pie  data={data} options={options} width={50} height={50} />
                                        :    ( <div className="chart-viewer__inner-box">
                                                   <Link to="/nowy-kanal"  type="button" className="btn--normal app__button--twhite">Stwórz pierwszy kanał</Link>
                                             </div> )
                                        }
                                </div> 
                        </div>
                </section>
        );
}

export default ChartViewer;
