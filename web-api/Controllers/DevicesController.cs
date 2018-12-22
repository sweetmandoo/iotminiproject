using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Devices;
using Microsoft.Azure.Devices.Shared;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class DevicesController : Controller
    {
        RegistryManager registry;

        public DevicesController()
        {
            registry = RegistryManager.CreateFromConnectionString("HostName=IoTMiniprojectIoTHub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=jKaAm7psb+wZ+qH8aLnqMuF9pYDv4UsM4Rq2Vt69/so=");
        }

        [HttpGet("list")]
        public async Task<List<Twin>> GetDeviceList()
        {

            var devicesQuery = registry.CreateQuery("SELECT * FROM devices");

            List<Twin> devices = new List<Twin>();
            while (devicesQuery.HasMoreResults)
            {
                devices.AddRange(await devicesQuery.GetNextAsTwinAsync());
            }

            return devices;
        }
    }
}
