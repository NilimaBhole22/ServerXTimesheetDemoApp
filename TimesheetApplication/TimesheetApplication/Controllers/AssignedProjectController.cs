using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TimesheetApplication.Models;

namespace TimesheetApplication.Controllers
{
  [Route("api/[controller]/[action]")]
  [ApiController]
  public class AssignedProjectController : Controller
  {
    private readonly RegistrationDetailContext _context;

    public AssignedProjectController(RegistrationDetailContext context)
    {
      _context = context;
    }

    // GET: api/AssignedProject
    [HttpGet]
    public ActionResult GetAssignedProjectDetails()
    {
      var assignedProjects = new List<AssignedProject>();
      assignedProjects = _context.ProjectsAssignmentDetails.ToList();
      return Ok(assignedProjects);
      
    }


    // GET: api/AssignedProject
    [HttpGet]
    public ActionResult GetAssignedProjectDetailsByUser()
    {
      var loginUser = _context.LoginDetails.FirstOrDefault();
      var assignedProjects = new List<AssignedProject>();
      assignedProjects = _context.ProjectsAssignmentDetails.Where(x => x.User == loginUser.Username).ToList();
      return Ok(assignedProjects);

    }


    //// GET: api/AssignedProject
    //[HttpGet]
    //public async Task<ActionResult<IEnumerable<AssignedProject>>> GetProjectDetail(string user)
    //{
    //  return await _context.ProjectsAssignmentDetails.Where(x => x.User == user).ToListAsync();
    //}


    // POST: api/AssignedProject
    [HttpPost]
    public async Task<ActionResult<AssignedProject>> PostAssignedProjectDetail(AssignedProject assignedProject)
    {      
        var assignedProjectData = _context.ProjectsAssignmentDetails.ToList();
      if(assignedProjectData == null)
      {
        foreach (var item in assignedProjectData)
        {
          if (item.User == assignedProject.User && item.Project == assignedProject.Project)
          {

          }
          else
          {
            _context.ProjectsAssignmentDetails.Add(assignedProject);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetAssignedProjectDetail", new { id = assignedProject.Id }, assignedProject);

          }
        }

      }

      return NoContent();
    }

    // PUT: api/AssignedProject/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutAssignedProjectDetail(int id, AssignedProject assignedProject)
    {
      if (id != assignedProject.Id)
      {
        return BadRequest();
      }
      _context.Entry(assignedProject).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!AssignedProjectDetailExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // GET: api/AssignedProject/5
    [HttpGet("{id}")]
    public async Task<ActionResult<AssignedProject>> GetAssignedProjectDetail(int id)
    {
      var assignedProject = await _context.ProjectsAssignmentDetails.FindAsync(id);

      if (assignedProject == null)
      {
        return NotFound();
      }

      return assignedProject;
    }

    // DELETE: api/AssignedProject/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<AssignedProject>> DeleteAssignedProjectDetail(int id)
    {
      var assignedProject = await _context.ProjectsAssignmentDetails.FindAsync(id);
      if (assignedProject == null)
      {
        return NotFound();
      }

      _context.ProjectsAssignmentDetails.Remove(assignedProject);
      await _context.SaveChangesAsync();

      return assignedProject;
    }

    private bool AssignedProjectDetailExists(int id)
    {
      return _context.ProjectsAssignmentDetails.Any(e => e.Id == id);
    }

  }
}
