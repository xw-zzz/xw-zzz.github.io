import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as o,f as i,a as t,b as p}from"./app-ef0b4d9d.js";const a={},s=t("hr",null,null,-1),l=t("p",null,"访问者模式",-1),c=t("p",null,"定义：对于一组对象，在不改变数据结构的前提下，增加作用于这些结构元素新的功能。",-1),m=t("p",null,"基本思路： 软件系统中由许多对象构成的、比较稳定的对象结构，这些对象都有一个方法用于接受访问者对象的访问。访问者是一个接口，它有一个访问的方法，可以对访问的对象结构中不同类型的元素做出不同的处理。我们以一个简单的项目来说明访问者模式的用处。",-1),r=t("p",null,"雇员管理系统的设计",-1),u=t("p",null,"为了突出问题，我们对项目进行了简化，如下是雇员的一些属性，Name(姓名)、Income(收入)、",-1),y=t("p",null,"VacationDays(年假天数)、Degree(等级)。以往公司职员年假天数未用完就直接作废，今年公司设置的人性化一点，如果没有用完，按照等级进行一定的补偿，并且随着不同的政策有不同的变化，要如何设计？",-1),d=p(`<p>​</p><p>传统设计：</p><p>传统的设计我们可以通过继承去实现。</p><p>实体类：</p><pre><code>public class Employee {

	private String name;
	private float income;
	private int vacationDays;
	private int degree;

	public Employee(String name, float income, int vacationDays, int degree) {
		this.name = name;
		this.income = income;
		this.vacationDays = vacationDays;
		this.degree = degree;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setIncome(float income) {
		this.income = income;
	}

	public float getIncome() {
		return income;
	}

	public void setVacationDays(int vacationDays) {
		this.vacationDays = vacationDays;
	}

	public int getVacationDays() {
		return vacationDays;
	}

	public void setDegree(int degree) {
		this.degree = degree;
	}

	public int getDegree() {
		return degree;
	}

}



public class Employees {
	private HashMap&lt;String, Employee&gt; employees;

	public Employees() {
		employees = new HashMap&lt;String, Employee&gt;();
	}

	public void Attach(Employee employee) {
		employees.put(employee.getName(), employee);
	}

	public void Detach(Employee employee) {
		employees.remove(employee);
	}

	public Employee getEmployee(String name) {
		return employees.get(name);
	}

	public void getCompensation() {
		for (Employee employee : employees.values()) {

			System.out
					.println(employee.getName()
							+ &quot;&#39;s Compensation is &quot;
							+ (employee.getDegree()
									* employee.getVacationDays() * 100));

		}

	}
}
</code></pre><p>测试类：</p><pre><code>public class MainTest {
	public static void main(String[] args) {
		Employees mEmployees = new Employees();

		mEmployees.Attach(new Employee(&quot;Tom&quot;, 4500, 8, 1));
		mEmployees.Attach(new Employee(&quot;Jerry&quot;, 6500, 10, 2));
		mEmployees.Attach(new Employee(&quot;Jack&quot;, 9600, 12, 3));
		mEmployees.getCompensation();
	}

}
</code></pre><p>在这个简单的项目中，不变的是雇员的属性，变化的是计算方式及操作，每次增加新的操作都要增加新的方法在雇员类中或者使用继承去实现，这种设计会导致更新和维护比较困难，并且上面的设计违背了设计原则中的开闭原则：对功能的扩展要保持开放，对功能的修改要保持关闭。</p><p>访问者模式：</p><p>（1）Visitor：接口或者抽象类，它定义了对每一个元素（Element）访问的行为，它的参数就是可以访问的元素，它的方法数理论上来讲与元素个数是一样的，因此，访问者模式要求元素的类族要稳定，如果经常添加、移除元素类，必然会导致频繁地修改Visitor接口，如果这样则不适合使用访问者模式。</p><p>（2）ConcreteVisitor1、ConcreteVisitor2：具体的访问类，它需要给出对每一个元素类访问时所产生的具体行为。</p><p>（3）Element：元素接口或者抽象类，它定义了一个接受访问者的方法（Accept），其意义是指每一个元素都要可以被访问者访问。</p><p>（4）ConcreteElementA、ConcreteElementB：具体的元素类，它提供接受访问方法的具体实现，而这个具体的实现，通常情况下是使用访问者提供的访问该元素类的方法。</p><p>（5）ObjectStructure：定义当中所说的对象结构，对象结构是一个抽象表述，它内部管理了元素集合，并且可以迭代这些元素供访问者访问。</p><p>代码实现：</p><p>首先我们实现一个Element基类。</p><pre><code>public abstract class Element {
	abstract public void Accept(Visitor visitor);
}
</code></pre><p>我们的雇员实体类都继承Element,</p><pre><code>public class Employee extends Element {

	private String name;
	private float income;
	private int vacationDays;
	private int degree;

	public Employee(String name, float income, int vacationDays, int degree) {
		this.name = name;
		this.income = income;
		this.vacationDays = vacationDays;
		this.degree = degree;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setIncome(float income) {
		this.income = income;
	}

	public float getIncome() {
		return income;
	}

	public void setVacationDays(int vacationDays) {
		this.vacationDays = vacationDays;
	}

	public int getVacationDays() {
		return vacationDays;
	}

	public void setDegree(int degree) {
		this.degree = degree;
	}

	public int getDegree() {
		return degree;
	}
    
    // 继承Accept方法
	@Override
	public void Accept(Visitor visitor) {
		// TODO Auto-generated method stub
		visitor.Visit(this);
	}

}
</code></pre><p>然后我们什么一个访问接口：Visitor.java</p><pre><code>public interface Visitor {
	abstract public void Visit( Element element );
	
}
</code></pre><p>补偿金算法实现类继承访问接口，实现功能： CompensationVisitor.java</p><pre><code>public class CompensationVisitor implements Visitor {

	@Override
	public void Visit(Element element) {
		// TODO Auto-generated method stub
		Employee employee = ((Employee) element);

		System.out.println(employee.getName() + &quot;&#39;s Compensation is &quot;
				+ (employee.getDegree() * employee.getVacationDays() * 10));
	}

}
</code></pre><p>测试类：</p><pre><code>public class MainTest {
	public static void main(String[] args) {
		Employees mEmployees = new Employees();

		mEmployees.Attach(new Employee(&quot;Tom&quot;, 4500, 8, 1));
		mEmployees.Attach(new Employee(&quot;Jerry&quot;, 6500, 10, 2));
		mEmployees.Attach(new Employee(&quot;Jack&quot;, 9600, 12, 3));

		mEmployees.Accept(new CompensationVisitor());

	}

}
</code></pre><p>设计者模式采用了双重分配的原理，从设计上来说很精妙。每一个雇员对象都继承了Accept方法，可以让访问者直接访问自己，CompensationVisitor里面实现了具体操作，通过调用Accept方法传入CompensationVisitor对象就会执行CompensationVisitor类中的Visit方法，只有在运行时才会指定运行的方法，实现了动态分配，访问者模式使得程序的维护和功能新增变得简单，只需要新增观察者实现类，运行时指定实现类对象即可。</p><p>访问者模式的优缺点：</p><p>优点：</p><ol><li>符合单一职责原则</li><li>扩展性良好</li><li>有益于系统的管理和维护</li></ol><p>缺点：</p><ol><li>增加新的元素类变得很困难</li><li>破坏封装性</li></ol><p>适用场景：</p><p>适用于数据结构相对稳定，它把数据结构和作用于其上的操作解耦，使得操作集合可以相对自由地演化</p>`,33);function g(v,E){return n(),o("div",null,[s,l,c,m,r,u,y,i("more"),d])}const _=e(a,[["render",g],["__file","1.访问者模式.html.vue"]]);export{_ as default};
