using System;

namespace Demo
{
  public class BrodayMinutes
  {
    public BrodayMinutes(string taskTitle, DateTime deadline = null)
    {
      this.TaskTitle = taskTitle;
      this.CreatedAt = DateTime.Now;
      this.Deadline = deadline;
    }

    public int Id { get; set; }
    public string TaskTitle { get; set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? Deadline { get; set; }
    public bool Completed { get; set; }
  }

  public class LocalStorageLayer : IDataLayer
  {
    
  }

  public class ProperSqlLayer : IDataLayer
  {
    public BrodayMinutes Get(int id) 
    {
      return new BrodayMinutes("Teach sming some C#", DateTime.Now.Date.AddDays(7).AddHour(19));
    }

    public bool Delete(int id) 
    {
      return true;
    }

    public int Insert(BrodayMinutes brodayMinutes) 
    {
      return 21;
    }

    public bool Update(BrodayMinutes brodayMinutes) 
    {
      return true;
    }

  }

  public interface IDataLayer
  {
    public BrodayMinutes Get(int id);
    public bool Delete(int id);
    public int Insert(BrodayMinutes brodayMinutes);
    public bool Update(BrodayMinutes brodayMinutes);
  }
}