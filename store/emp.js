export const state = () => ({
  employees: [],
});

// Mutations
export const mutations = {
  setEmployees(state, employees) {
    state.employees = employees;
  },
  addEmployee(state, employee) {
    state.employees.push(employee);
  },
  deleteEmployee(state, id) {
    state.employees = state.employees.filter((e) => e.id !== id);
  },
};

// Actions
export const actions = {
  async fetchEmployees({ commit }) {
    const employees = await this.$axios.$get("/users", {
      params: { roles: "EMPLOYEE" },
    });

    commit("setEmployees", employees);
  },
  async addEmployee({ commit }, employee) {
    const fd = new FormData();
    fd.append("photos", employee.image[0]);
    const res = await this.$axios.$post("/photos", fd);
    const newEmployee = {
      empName: employee.empName,
      profile: res[0].url,
      phone: employee.phone,
      role: "EMPLOYEE",
      attendent: employee.attendent,
    };
    await this.$axios.$post("/users/add/employees", newEmployee);
    commit("addEmployee", newEmployee);
  },
  async deleteEmployee({ commit }, id) {
    await this.$axios.$delete(`/users/${id}`);
    commit("deleteEmployee", id);
  },
};