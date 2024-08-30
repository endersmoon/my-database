"use client"
const columns = [
  {
    header: 'Candidate',
    cell: ({ row }) => {
      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      let candidate = row.original;

      return (
        <div>
          <div className='text-lg font-medium '>
          {candidate.first_name} {candidate.last_name}
        </div>
        <div>
          {candidate.gender} · { randomIntFromInterval(25, 44)}
        </div>

        </div>
        
      );
    },
  },

  {
    accessorKey: 'qualification_label',
    header: 'Qualification',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'locality',
    header: 'Locale',
  },
  {
    header: 'Expt. Salary',
    cell: ({ row }) => {
      let salary = row.original.current_salary;
      const formatted = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      }).format(salary);

      return <div>{salary ? formatted : 'NA'}</div>;
    },
  },
  {
    header: 'Language',
    cell: ({ row }) => {
      let langs = row.original.language_value_array;

      return (
        <ul key={row.original.id}>
          {langs.map((lang, index) => {
            return <li key={index}>{lang}</li>;
          })}
        </ul>
      );
    },
  },
  {
    header: 'Assets',
    cell: ({ row }) => {
      let assets = row.original.assets_array;

      return (
        <ul key={row.original.id}>
          {assets.map((asset, index) => {
            return <li key={index}>{asset}</li>;
          })}
        </ul>
      );
    },
  },
  {
    header: 'Skills',
    cell: ({ row }) => {
      let skills = row.original.skill_values_array;

      return (
        <ul key={row.original.id}>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      );
    },
  },
];

export default columns;
