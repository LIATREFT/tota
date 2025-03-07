import BoxImage from 'images/home/box-tourism-industry.png';

const theme = {
  slug: 'local_satisfaction',
  image: BoxImage,
  widgets: [
    {
      slug: 'power_bi_dashboard',
      fetchWidgetProps(): any {
        return {
          type: 'iframe',
          src: 'https://app.powerbi.com/view?r=YOUR_REPORT_ID', // Replace with your Power BI report URL
          width: '100%',
          height: '800px',
        };
      },
    },
  ],
};

export default theme;
